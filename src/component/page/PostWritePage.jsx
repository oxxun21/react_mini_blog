import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import style from "../page/App.css";
import Button from "../ui/Button";
import "../../font/AppFont.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const Container = styled.div`
    width: 50%;
    margin-top: 30px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const Title = styled.input`
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    margin-bottom: 20px;
    width: 94.5%;
    height: 30px;
    font-size: 30px;
    font-family: 'Noto Serif KR';
    padding: 20px;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`


function PostWritePage(props) {
    const navigate = useNavigate();

    const [content, setContent] = useState({
        title: '',
        content: '',
    })

    const [viewContent, setViewContent] = useState([]);

    const getValue = e => {
        const { name, value } = e.target;
        setContent({
            ...content,
            [name]: value
        })
    };

    return (
        <Wrapper>
            <Container>
                <Title
                    name="title"
                    onChange={getValue}
                    placeholder="Title"
                />

            <CKEditor
                editor={ClassicEditor}
                data="<p>Write your story!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                        console.log({ event, editor, data });
                        setContent({
                        ...content,
                        content: data
                        })
                        console.log(content);
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
                value={content}
            />

        

                <Button
                    title="글 작성하기"
                    onClick={(props) => {
                       setViewContent(viewContent.concat({...content}));
                    }}
                />

                <div>
                    {viewContent.map(element =>
                        <div>
                            <h2>{element.title}</h2>
                            <div>{element.content}</div>
                        </div>)}
                </div>   
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;