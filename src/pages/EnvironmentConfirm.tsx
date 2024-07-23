export default function EnvironmentConfirm() {
  return (
    <div className='flex flex-col'>
      <h1 className="font-bold">환경변수 확인</h1>
      <div className="flex gap-2 py-2">
        <label className="font-semibold">모드:</label><span className="font-semibold text-indigo-700">{import.meta.env.MODE}</span>
      </div>
    </div>
  )
}
