export interface ChatMessage {
  content: string;
  role: string;
}

export interface MessageType {
  role: string;
  transcript: string;
  transcriptType: string;
  type: string;
  status: string;
  turn: number;
}
