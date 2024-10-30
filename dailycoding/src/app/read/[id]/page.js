export default async function Read(props) {
  try {
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);

    // 응답이 성공했는지 확인
    if (!resp.ok) {
      const errorMessage = await resp.text(); // 실패한 응답을 텍스트로 읽음
      throw new Error(`Fetch error: ${errorMessage}`);
    }

    const topic = await resp.json(); // 성공했을 때만 JSON 파싱

    return (
      <>
        <h2>{topic.title}</h2>
        <p>{topic.body}</p>
      </>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <p>데이터를 가져오는 중 오류가 발생했습니다: {error.message}</p>;
  }
}
