import React, { useEffect } from 'react'
import * as Factory from 'factory.ts';
import NotificationsPresenter from './NotificationsPresenter'
import { BookmarkInterface } from '../../interface/interface';

const NotificationsContainer=()=> {

    const getNotificationData = (iter: number) => {
		const bookmarkFactory = Factory.Sync.makeFactory<BookmarkInterface>({
			studyId: Factory.each((i) => i),
			title: '제목입니다.',
			currentNumber: 1,
			maxNumber: 10,
			date: new Date(),
			hits: 5,
			stars: 5,
			category: Factory.each((i) => (i > 2 ? '어학->토익' : '프로그래밍')),
		});
		return bookmarkFactory.buildList(iter);
    }

    return (
        <div>
            <NotificationsPresenter notifications={getNotificationData(10)}/>
        </div>
    )
}

export default NotificationsContainer
