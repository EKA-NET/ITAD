import { useEffect, useRef } from "react";
import "../styles/CodeWriter.scss";

export const CodeWriter = () => {
  const typewriterRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const setupTypewriter = (t: any) => {
      let HTML = t.innerHTML;

      t.innerHTML = '';

      let cursorPosition = 0,
        tag: any,
        writingTag = true,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;
      

      let type = () => {
        if (writingTag === true) {
          tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
            tagOpen = false;
            writingTag = true;
          } else {
            tag = "";
            tagOpen = true;
            writingTag = true;
            tag += HTML[cursorPosition];
          }
        }
        if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
            tempTypeSpeed = 0;
          } else {
            tempTypeSpeed = Math.random() * typeSpeed + 50;
          }
          t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = Math.random() * typeSpeed + 50;
          writingTag = false;
          if (tagOpen) {
            let newSpan = document.createElement("span");
            t.appendChild(newSpan);
            newSpan.innerHTML = tag;
            tag = newSpan.firstChild;
          }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length) {
          setTimeout(type, tempTypeSpeed);
        }
      };

      return {
        type: type,
      };
    };

    const typer = typewriterRef.current;

    if (typer) {
      const typewriter = setupTypewriter(typer);
      typewriter.type();
    }
  }, []);

  return (
    <pre id="typewriter" ref={typewriterRef}>
      <span className="class-highlight">Console</span>.<span>WriteLine</span>(
      <span className="string-highlight">"Zapraszamy na ITAD 2024!"</span>
      );
    </pre>
  );
};
