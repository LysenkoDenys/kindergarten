export function useUser() {
  // return { id: document.cookie.match(/userId=(?<id>[^;]+);?$/).groups.id };
  const match = document.cookie.match(/userId=(?<id>[^;]+);?$/);
  const id = match ? match.groups.id : null;
  return { id };
}
