export default function UserFunction({ ime, godine, onNameChange }) {
  return (
    <div>
      <p>
        Moje ime je {ime} a imam godina {godine}
      </p>
      <input type="text" onChange={onNameChange} value={ime}/>
    </div>
  );
}
