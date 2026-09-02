import  "./ProgressBar.css"

interface ProgressBarProps {
  color: string | null;
  text: string | null;
}

export default function ProgressBar({color, text}:ProgressBarProps) {
  console.log(color)
  return (
    <div> 
      
        <progress id="progressBar" max="100" value="70">
          </progress>
        <label htmlFor="progressBar">{text}</label>
    </div>
  )
}