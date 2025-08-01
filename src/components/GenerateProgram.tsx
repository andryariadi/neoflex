"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { useUser } from "@clerk/nextjs";
import GenerateProgramSkeleton from "./GenerateProgramSkeleton";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { vapi } from "@/lib/vapi";

const GenerateProgram = () => {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isPeaking, setIsPeaking] = useState(false);
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
    };

    const handleCallEnd = () => {
      console.log("Call ended");
      setConnecting(false);
      setCallActive(false);
      setIsPeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI startedSpeaking");
      setIsPeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stoppedSpeaking");
      setIsPeaking(false);
    };

    const handleMessage = () => {};

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
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

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
    <section className="bg-rose-600 flex items-center gap-8">
      {/* AI CARD */}
      <div className="bg-fuchsia-500">AI</div>

      {/* USER CARD */}
      <Card className={`w-md bg-card/90 backdrop-blur-sm border overflow-hidden relative`}>
        <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
          {/* User Image */}
          <div className="relative size-32 mb-4">
            <Image src={user?.imageUrl} alt="User" width={128} height={128} className="object-cover rounded-full" />
          </div>

          <h2 className="text-xl font-bold text-foreground">You</h2>
          <p className="text-sm text-muted-foreground mt-1">{user ? (user.firstName + " " + (user.lastName || "")).trim() : "Guest"}</p>

          {/* User Ready Text */}
          <div className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border`}>
            <div className={`w-2 h-2 rounded-full bg-muted`} />
            <span className="text-xs text-muted-foreground">Ready</span>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default GenerateProgram;
