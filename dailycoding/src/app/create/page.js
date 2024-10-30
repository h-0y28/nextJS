"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    // onSubmit : 사용자와 상호작용할 때 실행됨 = server component X ⇒ 에러
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // target :  form tag를 가르킴
        // title : name이 title인 것을 가르킴
        const title = e.target.title.value;
        const body = e.target.body.value;
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, option)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.refresh();
            router.push(`/read/${lastid}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        {/* value : btn에 쓰여지는 text */}
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
