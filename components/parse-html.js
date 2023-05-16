import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function textReplaceAll(txt, replace, with_this) {
    return txt.replace(new RegExp(replace, 'g'), with_this);
  }

const getConvertedString = (string) => {
  const baseUrl = "https://octopus-app-8y8aw.ondigitalocean.app/";
  const str = string
    .replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
    .replace(/(style=".+?")/gm, "")
    .replace(new RegExp(baseUrl, "g"), "");

  return textReplaceAll(
    str,
    "/uploads/",
    "https://octopus-app-8y8aw.ondigitalocean.app/uploads/"
  );
};

export default function ParseStaticContent({
  pageContent
}) {
  return (
    <ReactMarkdown>
       {getConvertedString(pageContent)}
    </ReactMarkdown>
  );
}
