export function GrayButton({ text }: { text: string }) {
  return (
    <div className="relative bg-foreground text-background font-bold px-6 py-2.5 rounded-lg w-fit z-10 hover:cursor-pointer ">
      {text}
    </div>
  );
}

export function WhiteButton({ text }: { text: string }) {
  return (
    <div className="relative bg-background text-foreground px-6 py-2.5 font-bold rounded-lg w-fit z-10 hover:cursor-pointer" >
      {text}
    </div>
  );
}

