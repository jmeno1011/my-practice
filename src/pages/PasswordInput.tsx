import { ReactNode, useState } from "react";

export default function PasswordInput() {
  const [hide, setHide] = useState(true);
  const [input, setInput] = useState("");

  const hidePassowrd = () => {
    setHide(!hide);
  };
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">Password Forms</h1>
      <SectionLayout>
        <SectionTitle title="Password Hide" />
        <input type={hide ? "password" : "text"} />
        <button onClick={hidePassowrd}>
          <span>{hide ? "보이기" : "숨기기"}</span>
        </button>
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Clear" />
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={clearInput}>
          <span>지우기</span>
        </button>
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex1 : ex) 1234 8자리 이상" />
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex2 : ex) 1234 + !@# 8자리 이상" />
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex3 : ex) 1234 + !@# + qwer 8자리 이상" />
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex3 : ex) 1234 + qwer 8자리 이상" />
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex4 : ex) 1234 + qwer + ABCD 8자리 이상" />
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex4 : ex) 1234 + qwer + ABCD + !@$ 8자리 이상" />
      </SectionLayout>
    </div>
  );
}

interface SectionLayoutProps {
  children: ReactNode;
}

function SectionLayout({ children }: SectionLayoutProps) {
  return <section className="p-4 border border-gray-700">{children}</section>;
}

interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return <h5 className="font-semibold mb-4">{title}</h5>;
}
