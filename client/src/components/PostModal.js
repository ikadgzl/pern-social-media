import { useRef, useState } from 'react';
import StyledPostModal, {
  PostModalForm,
  PostModalHeader
} from './styled/PostModal.styled';

const PostModal = ({ toggleModal }) => {
  const [post, setPost] = useState({ body: '' });
  const backgroundRef = useRef(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    const { body } = post;

    if (body.length > 10) {
      // post to the backend
    }

    setPost({ body });
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
