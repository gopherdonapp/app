import React, { Component } from "react";
import {
    Paper,
    withStyles,
    Button,
    Typography,
    CircularProgress,
    Card,
    CardMedia,
    CardContent,
    Grid,
    CardActions,
    CardHeader,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText
} from "@material-ui/core";
import { styles } from "./PageLayout.styles";
import axios from "axios";
import { Event } from "../types/Event";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import moment from "moment";

interface IEventsState {
    events?: Event[];
    viewLoading: boolean;
    viewLoaded?: boolean;
    viewErrored?: boolean;
    filter: number;
}

class EventsPage extends Component<any, IEventsState> {
    constructor(props: any) {
        super(props);

        this.state = {
            viewLoading: true,
            filter: 1
        };
    }

    componentDidMount() {
        axios
            .get(
                "https://events.goucher.edu/api/2/events?days=" +
                    this.state.filter
            )
            .then((resp: any) => {
                this.setState({
                    events: resp.data.events,
                    viewLoading: false,
                    viewLoaded: true
                });
                console.log(resp.data.events);
            })
            .catch((err: Error) => {
                console.error(err.message);
                this.setState({ viewLoading: false, viewErrored: true });
            });
    }

    getEventDate(event: Event) {
        if (event.event.event_instances) {
            return moment(
                event.event.event_instances[0].event_instance.start
            ).calendar();
        } else {
            return `${moment(event.event.first_date).format("MMMM Do")} - ${moment(
                event.event.last_date
            ).format("MMMM Do")}`;
        }
    }

    updateFilter(event: any) {
        this.setState({
            filter: event.target.value,
            events: [],
            viewLoading: true,
            viewLoaded: false,
            viewErrored: false
        });
        axios
            .get(
                "https://events.goucher.edu/api/2/events?pp=100&days=" +
                    event.target.value
            )
            .then((resp: any) => {
                this.setState({
                    events: resp.data.events,
                    viewLoading: false,
                    viewLoaded: true
                });
                console.log(resp.data.events);
            })
            .catch((err: Error) => {
                console.error(err.message);
                this.setState({ viewLoading: false, viewErrored: true });
            });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.pageLayoutConstraints}>
                <Typography variant={"h5"}>Upcoming events</Typography>
                <FormControl className={classes.clearAllButton}>
                    <Select
                        value={this.state.filter}
                        onChange={(event: any) => this.updateFilter(event)}
                        inputProps={{
                            name: "filter",
                            id: "event-filter"
                        }}
                        autoWidth={true}
                    >
                        <MenuItem value={1}>Today</MenuItem>
                        <MenuItem value={7}>This week</MenuItem>
                        <MenuItem value={30}>This month</MenuItem>
                    </Select>
                    <FormHelperText>Show events for</FormHelperText>
                </FormControl>
                <br />
                <br />
                {this.state.events ? (
                    <Grid container spacing={8}>
                        {this.state.events.map((event: Event) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                xl={4}
                                key={event.event.id}
                            >
                                <Card className={classes.eventCard}>
                                    <CardMedia
                                        className={classes.eventMedia}
                                        image={event.event.photo_url}
                                        title={event.event.title}
                                    />
                                    <CardHeader
                                        title={event.event.title}
                                        titleTypographyProps={{ variant: "h6" }}
                                        subheader={`${this.getEventDate(
                                            event
                                        )} in ${event.event.location_name}`}
                                        subheaderTypographyProps={{
                                            variant: "caption"
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            component={"p"}
                                            gutterBottom
                                        >
                                            {event.event.description_text.slice(
                                                0,
                                                240
                                            ) +
                                                (event.event.description_text
                                                    .length > 240
                                                    ? "..."
                                                    : ".")}
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.pageGrow} />
                                    <CardActions>
                                        <Button
                                            color={"secondary"}
                                            href={event.event.localist_url}
                                            target={"_blank"}
                                            rel={
                                                "nofollower noreferrer noopener"
                                            }
                                        >
                                            Learn more
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                ) : null}
                {this.state.viewErrored ? (
                    <Paper className={classes.errorCard}>
                        <Typography variant="h4">Bummer.</Typography>
                        <Typography variant="h6">
                            Something went wrong when loading events from
                            Goucher.
                        </Typography>
                    </Paper>
                ) : (
                    <span />
                )}
                {this.state.viewLoading ? (
                  <div style={{ textAlign: "center" }}>
                      <CircularProgress
                        className={classes.progress}
                        color="primary"
                      />
                  </div>
                ) : (
                  <span />
                )}
                <br />
                <Typography variant={"caption"}>
                    Event information is pulled from events.goucher.edu and
                    displays the latest events. This data is not owned by
                    Gopherdon.
                </Typography>
                <br />
                <div style={{ textAlign: "center" }}>
                    <Button
                        href={"https://events.goucher.edu"}
                        target={"_blank"}
                        rel={"nofollower noreferrer noopener"}
                        color="primary"
                        variant="contained"
                    >
                        Find more events
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(EventsPage);
