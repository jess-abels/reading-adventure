import  "./ProgressBar.css"

export default function ProgressBar({color, text}:any) {
  {console.log(color)}
  return (
    <div> 
      
        <progress style={{backgroundColor: color}} id="progressBar" max="100" value="70">
          <style>{`
         &::-webkit-progress-value {
         backgroundColor: ${color}
      }

      `}</style>
          </progress>
        <label htmlFor="progressBar">{text}</label>
    </div>
  )
}