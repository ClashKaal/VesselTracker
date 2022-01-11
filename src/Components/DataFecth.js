import React, { useRef } from 'react';
import { CSVReader } from 'react-papaparse'
import PropType from 'prop-types';
function DataFetch(props) {
	const buttonRef = useRef();
	const handleOpenDialog = (e) => {
		// Note that the ref is set async, so it might be null at some point
		if (buttonRef.current) {
			buttonRef.current.open(e)
		}
	}

	const handleOnFileLoad = (data) => {
		props.handleUploadData(data);
	}

	const handleOnError = (err, file, inputElem, reason) => {
		console.log(err)
	}

	const handleOnRemoveFile = (data) => {
		console.log('---------------------------')
		console.log(data)
		console.log('---------------------------');
	}

	const handleRemoveFile = (e) => {
		// Note that the ref is set async, so it might be null at some point
		if (buttonRef.current) {
			buttonRef.current.removeFile(e)
		}
	}
	return (
        <><h1>{props.myownprops}</h1>
		<CSVReader
			ref={buttonRef}
			onFileLoad={handleOnFileLoad}
			onError={handleOnError}
			noClick
			noDrag
			onRemoveFile={handleOnRemoveFile}
		>
			{({ file }) => (
				<aside>
					<button
						type='button'
						onClick={handleOpenDialog}
					>
						Browse file
					</button>
					<div>
						{file && file.name}
					</div>
					<button onClick={handleRemoveFile}>
						Remove
					</button>
				</aside>
			)}
		</CSVReader>
        </>
	);
}

export default DataFetch;

DataFetch.propTypes={
    handleUploadData: PropType.func.isRequired,
}