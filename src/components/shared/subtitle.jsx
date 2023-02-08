import './subtitle.css'

export default function Subtitle({ title = 'Title'}) {

    return (
      <div id='title-box'>
        {title}
      </div>
    )
  }