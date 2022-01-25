import { useRef, useState } from 'react';
import StyledPostModal, {
  PostModalForm,
  PostModalHeader
} from './styled/PostModal.styled';
import { useSendPost } from '../hooks/useSendPost';

const PostModal = ({ toggleModal }) => {
  const [post, setPost] = useState({ body: '' });
  const backgroundRef = useRef(null);

  const { mutate: sendPost } = useSendPost();

  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (post.body.length > 10) {
      sendPost({ post: post.body });
    }

    setPost({ body: '' });
    toggleModal();
  };

  const handlePostChange = (e) => {
    setPost((prevPost) => ({ ...prevPost, [e.target.name]: e.target.value }));
  };

  return (
    <StyledPostModal
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) {
          toggleModal();
        }
      }}
    >
      <PostModalForm onSubmit={handlePostSubmit}>
        <PostModalHeader>
          <h1>New Post</h1>
        </PostModalHeader>
        <textarea
          name='body'
          minLength='10'
          maxLength='255'
          value={post.body}
          onChange={handlePostChange}
        />

        <sub>Characters left = {255 - post.body.length}</sub>
        <button type='submit'>Submit New Post</button>
      </PostModalForm>
    </StyledPostModal>
  );
};

export default PostModal;
