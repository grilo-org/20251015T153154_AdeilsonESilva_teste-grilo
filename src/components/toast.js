import {WToast} from 'react-native-smart-tip';

const Toast = title => {
  let newTitle;
  if (typeof title === 'string' || title instanceof String) {
    newTitle = title;
  } else if (title instanceof Error) {
    newTitle = title.message;
  } else {
    return;
  }

  WToast.show({
    data: newTitle,
    duration: WToast.duration.SHORT,
    backgroundColor: '#444444',
    position: WToast.position.BOTTOM,
  });
};

export default Toast;
