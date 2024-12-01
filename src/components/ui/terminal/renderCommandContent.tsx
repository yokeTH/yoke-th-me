import { CommandContent, LinkCommand, TextCommand, } from "../../../app/terminal/types";
import Link from "next/link";
import Image from "next/image";
import { ComposeTextOutputs } from "@/components/ui/terminal/textOutput";
import { Separator } from "@/components/ui/separator";
import { CommandOutput } from "@/components/ui/terminal/CommandOutput";

export const renderCommandContent = (content: CommandContent): JSX.Element => {
    switch (content.type) {
      case 'image':
        return <Image src={content.content} alt={""} />;
      case 'link':
        return <Link
          href={(content as LinkCommand).url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "inherit" }}
          className="after:content-['↗']"
        >
          {(content as LinkCommand).placeholder}
        </Link>
      case 'text':
        const textContent = content as TextCommand;
        const formats = Array.isArray(textContent.format)
          ? textContent.format
          : textContent.format
            ? [textContent.format]
            : [];
  
        return <ComposeTextOutputs formats={formats}>
          {textContent.url ?
            // if provided url return as link
            <Link
              href={textContent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="after:content-['↗']"
            >
              {textContent.content}
            </Link>
  
            :
            // if not provided url
            textContent.content
          }
        </ComposeTextOutputs>;
      case 'endline':
        return <br />
      case 'separator':
        return <CommandOutput><Separator /></CommandOutput>
      default:
        return <></>;
    }
  }