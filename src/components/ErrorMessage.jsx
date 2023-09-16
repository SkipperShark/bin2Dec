
function ErrorMessage({ errorMessageClass }) {

	return (
		<>
			<label className={errorMessageClass}>Please input binary digits! A 1 or a 0!</label>
		</>
	)
}


export default ErrorMessage