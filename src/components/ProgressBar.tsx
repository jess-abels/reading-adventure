import  "./ProgressBar.css"

interface ProgressBarProps {
  color: string | null;
  progressValue: number;
  progressTotal: number;
  goalType: string;
}



export default function ProgressBar({color, progressValue, progressTotal, goalType}:ProgressBarProps) {
  const progressText = `${progressValue} / ${progressTotal} ${goalType === 'daily' ? 'minutes' : 'books'}`
  return (
    <div> 
      
        <progress id="progressBar" max="100" value={`${progressValue / progressTotal * 100}`}>
          </progress>
        <label htmlFor="progressBar">{progressText}</label>
    </div>
  )
}