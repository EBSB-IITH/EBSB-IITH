interface ButtonProps {
	text: string;
	source: string;
  }
  
  export function GrayButton({ text, source }: ButtonProps) {
	  return (
		  <a href={source} className="relative bg-foreground text-background font-bold px-6 py-2.5 lg:py-2 rounded-lg w-fit z-10 hover:cursor-pointer ">
			  {text}
		  </a>
	  );
  }
  
  export function WhiteButton({ text, source }: ButtonProps) {
	  return (
		  <a href={source} className="relative bg-background text-foreground px-6 lg:py-2 py-2.5 font-bold rounded-lg w-fit z-10 hover:cursor-pointer" target="_blank" >
			  {text}
		  </a>
	  );
  }
  