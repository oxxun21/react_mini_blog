import styled from "styled-components";

function PostList({ userName }) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

  const Title = styled.h1`
    font-size: 32px;
    color: beige;
    margin: 5px;
    `;

  const PostContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: gray;
    font-size: 20px;
    margin-top: 20px;
  `;

  return (
    <>
      <Container>
        <Title>{userName}의 짜장 멋진 블로그</Title>
        <PostContainer>
          <span>대충 포스트 리스트라는 뜻 </span>
          <span>대충 포스트 리스트라는 뜻 </span>
          <span>대충 포스트 리스트라는 뜻 </span>
          <span>대충 포스트 리스트라는 뜻 </span>
          <span>대충 포스트 리스트라는 뜻 </span>
          <span>대충 포스트 리스트라는 뜻 </span>
        </PostContainer>
      </Container>
    </>
  );
}

export default PostList;