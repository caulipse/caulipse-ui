import { Box, InputAdornment, TextField } from '@material-ui/core';
import { IModalContainerCommonProps } from '@src/components/common/modal/types';
import globalState from '@src/state';
import { useAtom } from 'jotai';
import React, { KeyboardEvent, useCallback, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import './studySearchModal.scss';

const StudySearchModal = ({ open, onClose }: IModalContainerCommonProps): JSX.Element | false => {
	const [state, setState] = useAtom(globalState);

	const [searchText, setSearchTest] = useState<string>('');

	const handleSearch = useCallback(() => {
		onClose(false);
		state.modal.params.onSearch(searchText);
	}, [searchText]);

	const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		open && (
			<Box className="study-search-modal-overlay" onClick={() => onClose(false)}>
				<Box className="study-search-modal-header-con">
					<IoClose className="study-search-modal-icon" color="#fff" onClick={() => onClose(false)} />
					<Box className="study-search-modal-header-title">스터디 검색</Box>
					<Box className="study-search-modal-icon" />
				</Box>
				<Box className="study-search-modal-input-con">
					<TextField
						className="study-search-modal-input"
						placeholder="어떤 스터디를 찾고 계신가요?"
						value={searchText}
						onChange={(e) => setSearchTest(e.target.value)}
						onClick={(e) => e.stopPropagation()}
						onKeyPress={onKeyPress}
						fullWidth
						type="search"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<button type="button" onClick={handleSearch}>
										<IoSearch className="study-search-modal-icon" color="#212b36" />
									</button>
								</InputAdornment>
							),
						}}
					/>
				</Box>
			</Box>
		)
	);
};

export default StudySearchModal;
