const newMessage = {
  message : 'Hola mundo',
  title : 'Hola React'
};

export const FirstApp = () => {
  return (
    <>
    <h1>
      <code>{ JSON.stringify(newMessage) }</code>
      </h1>
    </>
  )
}