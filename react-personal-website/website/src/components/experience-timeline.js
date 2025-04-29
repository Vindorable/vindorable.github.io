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

  const timelineData = [
    {
      period: "Aug 2023-Present",
      title: "FULL STACK DEVELOPER (TRAINEESHIP)",
      organization: "Aires Applied Technology",
      icon: <Code size={22} />,
      isEducation: false
    },
    {
      period: "Dec 2022-Aug 2023",
      title: "SOLO GAME DEVELOPER",
      organization: "J. Games Entertainment",
      icon: <GameController size={22} />,
      isEducation: false
    },
    {
      period: "Nov 2021-Dec 2022",
      title: "CREATIVE LEAD",
      organization: "Tron Dao (WINk Web3.0 GameFi)",
      icon: <EyedropperSample size={22} />,
      isEducation: false
    },
    {
      period: "Apr 2021-Nov 2021",
      title: "GAME DESIGNER",
      organization: "Game Reign Pte Ltd",
      icon: <GameController size={22} />,
      isEducation: false
    },
    {
      period: "2018-2021",
      title: "VFX SUPERVISOR - MOGRAPH ARTIST",
      organization: "Monochromatic Pictures",
      icon: <MagicWand size={22} />,
      isEducation: false
    },
    {
      period: "2013-2015",
      title: "NATIONAL SERVICE",
      organization: "RSAF Tengah Airbase",
      icon: <MedalMilitary size={22} />,
      isEducation: false
    },
    {
      period: "2010-2013",
      title: "DIPLOMA IN VISUAL EFFECT AND MOTION GRAPHICS",
      organization: "Singapore Polytecnic",
      icon: <Backpack size={22} />,
      isEducation: true
    },
    {
      period: "2006-2009",
      title: "\"O\" LEVELS",
      organization: "Jurong Secondary School",
      icon: <Backpack size={22} />,
      isEducation: true
    }
  ]

  return (
    <>
      <Typography variant="h6">Education - Career Timeline</Typography>

      <Timeline
        position={IsMobile() ? "" : "alternate-reverse"}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: IsMobile() ? {
            flex: 0,
            padding: 0,
          } : {},
        }}
      >
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: theme.palette.background.paper }}>
                {item.icon}
              </TimelineDot>
              {index < timelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper>
                <Stack p={2} spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                    <CalendarBlank size={16} />
                    <Typography variant="caption">{item.period}</Typography>
                  </Stack>

                  <Typography inline align="left" variant="body2"><b>{item.title}</b></Typography>

                  <Stack direction={"row"} alignItems={"center"} justifyContent={"start"} spacing={0.75}>
                    {item.isEducation ? <GraduationCap size={22} /> : <Buildings size={22} />}
                    <Typography variant="body2">{item.organization}</Typography>
                  </Stack>
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}


// ---------------------------------------------------------

export default ExperienceTimeline;