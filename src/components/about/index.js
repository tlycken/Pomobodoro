import React from 'react';
import {IndexLink} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Why pomobodoro?</h1>
        <p>Good question!</p>

        <p>
          The short answer is that it's fun!
        </p>

        <p>
          But of course, there's also a long answer...
        </p>
        <p>
          A while ago, my team decided that we wanted to get better at utilizing mob
          programming to solve hard problems. As a way to learn what works best for us,
          and to make mob programming a natural part of our day, we decided to use it
          on&nbsp;
          <strong>everything</strong>.
        </p>

        <p>
          Yes, you read that right – everything. We went from pair programming a few hours
          every week, to spending at least six of our eight hours every day in a single
          mob. The main reason we didn't fill all eight, was that we didn't arrive and
          leave in sync every day.
        </p>

        <p>
          We quickly realized that mob programming can be exhausting, if you don't make
          sure you take small and frequent breaks. In the beginning, though, we tried
          various timer apps we found on the web and in our app stores, and used&nbsp;
          <a href="http://oss.jahed.io/agility/timer.html">this one</a>&nbsp; a lot. It's
          nice, because you can enter the names of the members of the mob, so you don't
          have to keep track of whose turn it is, but it just rotates among the mobsters,
          encouraging very long sessions of mob programming without breaks.
        </p>

        <p>
          Enter &nbsp;<em>Pomodoro</em>.
        </p>
        <p>
          The Pomodoro technique is all about breaks. It's simple idea is that whatever
          you're currently working with, you should take micro-breaks of a few minutes
          every so often, and longer breaks at least a couple of times per day. This is
          usually handled by a timer which beeps both when it's time to take a break, and
          when the break is over.
        </p>
        <p>
          We looked around for a bit for a timer app that would combine the features we
          needed – both keeping track of who's turn it is to wield the keyboard, and
          inserting short breaks now and then – but we couldn't find one.
        </p>
        <p>
          So we built it.
        </p>
        <IndexLink to="/" className="btn btn-primary btn-lg">Enjoy!</IndexLink>
      </div>
    );
  }
}

export default HomePage;
