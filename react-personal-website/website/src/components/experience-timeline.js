import React from "react";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from "@mui/lab";
import { Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Backpack, Buildings, CalendarBlank, Code, EyedropperSample, GameController, GraduationCap, MagicWand } from "phosphor-react";
import { MedalMilitary } from "@phosphor-icons/react";

import { IsMobile } from "../functions/isMobile";


// ---------------------------------------------------------

const ExperienceTimeline = () => {
  const theme = useTheme();

  return (
    <>
      <Timeline
        position={IsMobile() ? "" : "alternate-reverse"}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: IsMobile() ? {
            flex: 0,
            padding: 0,
          } : {},
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <Code size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">Aug 2023-Present</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>FULL STACK DEVELOPER (TRAINEESHIP)</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">Aires Applied Technology</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <GameController size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">Dec 2022-Aug 2023</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>SOLO GAME DEVELOPER</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">J. Games Entertainment</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <EyedropperSample size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">Nov 2021-Dec 2022</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>CREATIVE LEAD</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">Tron Dao (WINk Web3.0 GameFi)</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <GameController size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">Apr 2021-Nov 2021</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>GAME DESIGNER</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">Game Reign Pte Ltd</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <MagicWand size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">2018-2021</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>VFX SUPERVISOR - MOGRAPH ARTIST</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">Monochromatic Pictures</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <MedalMilitary size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">2013-2015</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>NATIONAL SERVICE</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <Buildings size={22} />
                  <Typography variant="body2">RSAF Tengah Airbase</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <Backpack size={22} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">2010-2013</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>DIPLOMA IN VISUAL EFFECT AND MOTION GRAPHICS</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <GraduationCap size={22} />
                  <Typography variant="body2">Singapore Polytecnic</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
              <Backpack size={22} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper>
              <Stack p={2} spacing={1}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <CalendarBlank size={16} />
                  <Typography variant="caption">2006-2009</Typography>
                </Stack>

                <Typography inline align="left" variant="body2"><b>"O" LEVELS</b></Typography>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                  <GraduationCap size={22} />
                  <Typography variant="body2">Jurong Secondary School</Typography>
                </Stack>
              </Stack>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}


// ---------------------------------------------------------

export default ExperienceTimeline;