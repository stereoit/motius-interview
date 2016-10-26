import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// wrapper for React dangerouslySetInnerHTML
var renderUsecaseBody = (body) => ({__html: body });

class UsecaseCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded : false
    }
    this.toggleShowMilestones = this.toggleShowMilestones.bind(this)
  }

  toggleShowMilestones() {
    this.setState({expanded: !this.state.expanded});
  }

  render(){
    const {usecase} = this.props
    const expanded = this.state.expanded
    return (
      <Card expanded={this.state.expanded} className="usecase-card">
        <CardTitle title={usecase.title} subtitle="Usecase" />
        <CardText dangerouslySetInnerHTML={renderUsecaseBody(usecase.body)} />
        <CardText expandable={true}>
          Show milestones here
        </CardText>
        { usecase.milestones.length ?
          <CardActions>
            <FlatButton label={expanded ? "Hide milestones" : "Show milestones" } onClick={this.toggleShowMilestones} />
          </CardActions>
          : null
        }
      </Card>
    )
  }
}

export default UsecaseCard;
