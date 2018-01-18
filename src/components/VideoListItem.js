import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//Meme chose que const video = props.video & const onVideoSelect = props.onVideoSelect
	return(
			<li className="list-group-item" onClick={() => onVideoSelect(video)}>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object"  src={video.snippet.thumbnails.medium.url} 
						alt={video.snippet.thumbnails.medium.url}/>
					
					</div>
						<div className="media-body">
							<div className="media-heading">
								{video.snippet.title}
							</div>			
						</div>
				</div>
			</li>
		)
}

export default VideoListItem