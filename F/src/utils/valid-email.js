export const validEmail = (email) => {
  if(email == null || email.length == 0) return false;
  var sub = email.split('@');
  if (email.lastIndexOf('.') == email.length - 1) return false;
  if (sub.length != 2) return false;
  if (sub[1].indexOf('.') == -1) return false;
  return true;
}