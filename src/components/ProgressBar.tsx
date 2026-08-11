import  "./ProgressBar.css"

export default function ProgressBar() {
  return (
    <div> 
        <progress id="progressBar" max="100" value="70"/>
        <label htmlFor="progressBar">70%</label>
    </div>
  )
}