import { Box } from '@material-ui/core';
import CommonTextField from '@src/components/common/textfield/CommonTextField';
import React from 'react';
import './index.scss';

const TITLE_MAX = 40;
const CONTENT_MAX = 500;

interface StudyContentProps {
	selectedTitle: string;
	selectedContent: string;
	setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
	setSelectedContent: React.Dispatch<React.SetStateAction<string>>;
}

const StudyContent = ({
	selectedTitle,
	selectedContent,
	setSelectedTitle,
	setSelectedContent,
}: StudyContentProps): JSX.Element => {
	return (
		<>
			<Box className="study-content-body-content-header mt2rem">
				<Box className="study-content-title">제목</Box>
				<Box className="study-content-subtitle">
					({selectedTitle.length}/{TITLE_MAX})
				</Box>
			</Box>
			<CommonTextField
				className="study-content-body-content-title-input"
				value={selectedTitle}
				onChange={(e) => setSelectedTitle(e.target.value)}
				textFieldProps={{
					variant: 'outlined',
					minRows: 1,
					placeholder: '제목을 입력해 주세요.',
					multiline: true,
					inputProps: { maxLength: TITLE_MAX },
				}}
			/>
			<Box className="study-content-body-content-header mt2rem">
				<Box className="study-content-title">본문</Box>
				<Box className="study-content-subtitle">
					({selectedContent.length}/{CONTENT_MAX})
				</Box>
			</Box>
			<CommonTextField
				className="study-content-body-content-title-input"
				value={selectedContent}
				onChange={(e) => setSelectedContent(e.target.value)}
				textFieldProps={{
					variant: 'outlined',
					minRows: 5,
					placeholder: '본문을 입력해 주세요.',
					multiline: true,
					inputProps: { maxLength: CONTENT_MAX },
				}}
			/>
		</>
	);
};

export default StudyContent;