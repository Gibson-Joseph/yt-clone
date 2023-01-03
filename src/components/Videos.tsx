import { Stack, Box } from "@mui/system";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }: any): any => {
  console.log(videos);

  if (!videos?.length) return "Loading ...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
    >
      {videos.map((item: any, idx: any) => {
        return (
          <Box key={idx}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
