export const GifItem = ({title, url, id}) => {


  return (
    <h1 className="card">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </h1>
  )
}
