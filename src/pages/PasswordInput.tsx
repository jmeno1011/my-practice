import { FormEvent, ReactNode, useState } from "react";

export default function PasswordInput() {
  const [hide, setHide] = useState(true);
  const [input, setInput] = useState("");

  const hidePassowrd = () => {
    setHide(!hide);
  };
  const clearInput = () => {
    setInput("");
  };

  const confirmRegex1 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">Password Forms</h1>
      <SectionLayout>
        <SectionTitle title="Password Hide" />
        <div className="flex gap-4">
          <input type={hide ? "password" : "text"} />
          <button onClick={hidePassowrd}>
            <span>{hide ? "보이기" : "숨기기"}</span>
          </button>
        </div>
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Clear" />
        <div className="flex gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={clearInput}>
            <span>지우기</span>
          </button>
        </div>
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex1 : ex) 1234 8자리 이상" />
        <SectionForm onSubmit={confirmRegex1}>
          <input
            type="password"
            pattern="\d{8,}"
            placeholder="Please enter at least 8 digits"
            required
            className="flex-1"
          />
          <button type="submit" className="min-w-10">
            <span>확인</span>
          </button>
        </SectionForm>
      </SectionLayout>
      <SectionLayout>
        <SectionTitle title="Password Regex2 : ex) 1234 + !@# 8자리 이상" />
        <form className="flex gap-4"></form>
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

interface SectionFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

function SectionForm({ onSubmit, children }: SectionFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-4">
      {children}
    </form>
  );
}
