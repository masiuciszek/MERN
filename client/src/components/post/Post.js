/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem'

function Post({ getPost, post: { post, loading }, match }) {
  useEffect(() => {
    getPost(match.params.id);

  },[getPost])
  return loading ||  null ? <Spinner/> : (<div className="push-down">
          <>
          <Link to="/posts" className="btn ">Back To Posts</Link>
        <PostItem  post={post}  showActions={false} />
        </>
      </div>)
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
