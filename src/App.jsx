import './app.css';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage'

export default function App() {

	const [userInput, setUserInput] = useState("")
	const [decimalValue, setDecimalValue] = useState("")
	const [errorMessageClass, setErrorMessageClass] = useState("ErrorMessage hidden")

	const maxNumberOfBinaryDigits = 20

	function handleOnChange(event) {

		let newUserInput = event.target.value
		let sanitizedUserInput = ""

		if (newUserInput.length === 0) {
			setUserInput("")
			setDecimalValue("")
			return
		}

		//* only extract 0 or 1 from user input
		for (let i = 0; i < newUserInput.length; i++) {
			if (newUserInput[i] === '0' || newUserInput[i] === '1') {
				sanitizedUserInput = sanitizedUserInput + newUserInput[i]
			}
			else {
				if (errorMessageClass === "ErrorMessage animation1") {
					setErrorMessageClass("ErrorMessage animation2")
				}
				else {
					setErrorMessageClass("ErrorMessage animation1")
				}

				return
			}
		}

		setErrorMessageClass("ErrorMessage hidden")
		setUserInput(sanitizedUserInput)

		let binaryUserInput = sanitizedUserInput
		let decimalValue = 0
		let exponent = 0

		//* calculate decimal from binary input
		for (let i = binaryUserInput.length - 1; i >= 0; i--) {

			decimalValue += binaryUserInput[i] * (2 ** exponent)
			exponent += 1
		}

		setDecimalValue(decimalValue)
	}


	return (
		<div className="App">
			<article className='Card'>
				<header>
					<h1>Bin2Dec</h1>
					<p>
						Enter a string of up to {maxNumberOfBinaryDigits} binary digits, 0's and 1's, in any sequence and then see its decimal equivalent
					</p>
				</header>
				<div className="Calculator">
					<div className='Line'>
						<label>Decimal</label>
						<div className='ContentValue'>
							<output>{decimalValue}</output>
						</div>
					</div>
					<ErrorMessage
						errorMessageClass={errorMessageClass}
					/>
					<div className='Line'>
						<label > Binary</label>
						<input
							className='ContentValue'
							onChange={handleOnChange}
							value={userInput}
							type="text"
							name="userInput"
							maxLength={maxNumberOfBinaryDigits}
						/>
					</div>


				</div>
			</article >
		</div >
	);
}