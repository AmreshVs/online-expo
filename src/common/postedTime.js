import moment from 'moment';

const PostedTime = (posted_date) => {
  if(moment(posted_date).fromNow() === 'a few seconds ago'){
    return 'now';
  }
  else{
    return moment(posted_date).fromNow();
  }
}

export default PostedTime;