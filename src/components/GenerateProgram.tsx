"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { useUser } from "@clerk/nextjs";
import GenerateProgramSkeleton from "./GenerateProgramSkeleton";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { vapi } from "@/lib/vapi";
import { Button } from "./ui/button";

const GenerateProgram = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [callEnded, setCallEnded] = useState(false);

  const messageContainerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const { isLoaded, user } = useUser();

  // Auto scroll messages to the bottom
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Navigate user to profile page after the call ends
  useEffect(() => {
    if (callEnded) {
      const redirectTimer = setTimeout(() => {
        router.push("/profile");
      }, 1500);

      return () => clearTimeout(redirectTimer);
    }
  }, [callEnded, router]);

  // Setup event listeners for vapi:
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);

      console.log(connecting, "<---handleCallStart");
    };

    const handleCallEnd = () => {
      console.log("Call ended");
      setConnecting(false);
      setCallActive(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI startedSpeaking");
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stoppedSpeaking");
      setIsSpeaking(false);
    };

    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: unknown) => {
      console.error("VAPI Error:", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi.on("call-start", handleCallStart).on("call-end", handleCallEnd).on("speech-start", handleSpeechStart).on("speech-end", handleSpeechEnd).on("message", handleMessage).on("error", handleError);

    return () => {
      vapi.off("call-start", handleCallStart).off("call-end", handleCallEnd).off("speech-start", handleSpeechStart).off("speech-end", handleSpeechEnd).off("message", handleMessage).off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    console.log(callActive, "<---toggleCall");

    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        console.log(connecting, "<---toggleCall2");

        const fullName = user?.firstName ? `${user.firstName} ${user.lastName || ""}`.trim() : "There";

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
          variableValues: {
            full_name: fullName,
            // user_id: user?.id || "guest",
          },
        });
      } catch (error) {
        console.log("Error starting call:", error);
        setConnecting(false);
      }
    }
  };

  if (!isLoaded) return <GenerateProgramSkeleton />;
  if (!user) return null;

  return (
    <div className="space-y-8">
      {/* CALL CONTAINER */}
      <section className="bg-rose-600 flex items-center gap-8">
        {/* AI CARD */}
        <Card className="w-md bg-card/90 backdrop-blur-sm border border-border overflow-hidden relative">
          <div className="b-green-500 aspect-video flex flex-col items-center justify-center p-6 relative">
            {/* AI VOICE ANIMATION */}
            <div className={`b-fuchsia-500 absolute inset-0 ${isSpeaking ? "opacity-30" : "opacity-0"} transition-opacity duration-300`}>
              {/* Voice wave animation when speaking */}
              <div className="b-rose-600 absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center items-center h-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`mx-1 h-16 w-1 bg-primary rounded-full ${isSpeaking && "animate-sound-wave"}`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: isSpeaking ? `${Math.random() * 50 + 20}%` : "5%",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* AI IMAGE */}
            <div className="b-rose-500 relative size-32 mb-4">
              {/* Voice pulse animation when speaking */}
              <div className={`absolute inset-0 bg-primary opacity-10 rounded-full blur-lg ${isSpeaking && "animate-pulse"}`} />

              {/* IMAGE CONTAINER */}
              <div className="b-fuchsia-500 relative w-full h-full rounded-full bg-card flex items-center justify-center border border-border overflow-hidden">
                {/* IMAGE GRADIENT */}
                <div className="b-rose-600 absolute z-10 inset-0 bg-gradient-to-b from-primary/10 to-secondary/10"></div>

                {/* AI AVATAR */}
                <Image src="/ai-avatar.png" alt="AI Assistant" fill className="object-cover" />
              </div>
            </div>

            {/* AI NAME */}
            <h2 className="text-xl font-bold text-foreground">NeoFlex AI</h2>
            <p className="text-sm text-muted-foreground mt-1">Fitness & Diet Coach</p>

            {/* SPEAKING INDICATOR */}
            <div className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border ${isSpeaking && "border-primary"}`}>
              <div className={`w-2 h-2 rounded-full ${isSpeaking ? "bg-primary animate-pulse" : "bg-muted"}`} />

              <span className="text-xs text-muted-foreground">{isSpeaking ? "Speaking..." : callActive ? "Listening..." : callEnded ? "Redirecting to profile..." : "Waiting..."}</span>
            </div>
          </div>
        </Card>

        {/* USER CARD */}
        <Card className={`w-md bg-card/90 backdrop-blur-sm border`}>
          <div className="b-green-600 aspect-video flex flex-col items-center justify-center p-6 relative">
            {/* USER IMAGE */}
            <div className="relative size-32 mb-4">
              <Image src={user?.imageUrl} alt="User" fill className="object-cover rounded-full" />
            </div>

            {/* NAME */}
            <h2 className="text-xl font-bold text-foreground">You</h2>
            <p className="text-sm text-muted-foreground mt-1">{user ? (user.firstName + " " + (user.lastName || "")).trim() : "Guest"}</p>

            {/* USER READY TEXT */}
            <div className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border`}>
              <div className={`w-2 h-2 rounded-full bg-muted`} />
              <span className="text-xs text-muted-foreground">Ready</span>
            </div>
          </div>
        </Card>
      </section>

      {/* MESSAGE COINTER  */}
      {messages.length > 0 && (
        <div ref={messageContainerRef} className="w-full bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-8 h-64 overflow-y-auto transition-all duration-300 scroll-smooth">
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className="message-item animate-fadeIn">
                <div className="font-semibold text-xs text-muted-foreground mb-1">{msg.role === "assistant" ? "NeoFlex AI" : "You"}:</div>
                <p className="text-foreground">{msg.content}</p>
              </div>
            ))}

            {callEnded && (
              <div className="message-item animate-fadeIn">
                <div className="font-semibold text-xs text-primary mb-1">System:</div>
                <p className="text-foreground">Your fitness program has been created! Redirecting to your profile...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* BUTTON ACTION */}
      <div className="w-full flex justify-center">
        <Button
          className={`w-40 text-lg rounded-3xl ${callActive ? "bg-destructive hover:bg-destructive/90" : callEnded ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"} text-white relative`}
          onClick={toggleCall}
          disabled={connecting || callEnded}
        >
          {/* Button pulse animation when button is connecting */}
          {connecting && <span className="absolute inset-0 rounded-full animate-ping bg-primary/50 opacity-75"></span>}

          <span>{callActive ? "End Call" : connecting ? "Connecting..." : callEnded ? "View Profile" : "Start Call"}</span>
        </Button>
      </div>
    </div>
  );
};

export default GenerateProgram;
