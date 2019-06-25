import React from "react";
import dateFns from "date-fns";


class Today extends React.Component {
  render() {
    
    const dateFormat = "MM/DD/YYYY";
    const dateFormatDisplay = "Do MMMM YYYY";
    var selectedDate = new Date(this.props.Currdate);
    
    const listItemsToday = []; 
    const listItemsUpcoming = []; 
    var message = "";

    selectedDate = dateFns.format(selectedDate, dateFormat);

    var tday = dateFns.format(new Date(), dateFormat);
    var isToday = dateFns.isSameDay(tday, selectedDate);
    
    this.props.Today.forEach(function (link)
    {if(dateFns.isSameDay(dateFns.format(link.Date, dateFormat), selectedDate))
       {
        var formatted = dateFns.format(link.Date, dateFormatDisplay); 
        listItemsToday.push(<div>{link.Program} on {formatted}</div>);
        }
     });
    
    if(listItemsToday.length === 0 & !isToday)
    {
        message = "No program on " + dateFns.format(selectedDate, dateFormatDisplay);
        listItemsToday[0] = <b>{message}</b>
    }
    else if(listItemsToday.length === 0 & isToday)
    {
        message = "No program Today";
        listItemsToday[0] = <b>{message}</b>
    }
    else if(listItemsToday.length !== 0 & !isToday)
    {
        message = "On " + dateFns.format(selectedDate, dateFormatDisplay);
        listItemsToday.unshift(<b>{message}</b>);
    }
    else
    {
        message = "Today In Kendra"
        listItemsToday.unshift(<b>{message}</b>);
    }

    this.props.Today.forEach(function (link)
    {
        
        if(dateFns.isAfter(dateFns.format(link.Date, dateFormat), dateFns.format(tday, dateFormat)) & dateFns.isBefore(dateFns.format(link.Date, dateFormat), dateFns.addDays(tday, 7)))
            { listItemsUpcoming.push(<div>{link.Program} on {link.Date}</div>); }
    });
    return(<div>{listItemsToday}<div><b>Upcoming Programs</b>{listItemsUpcoming}</div></div>)
    }

}

export default Today;