# Private-Chat-Room

A real-time private chat room application built with Node.js, Express, and Socket.io.

## Features

- Real-time messaging with WebSocket
- User join/leave notifications
- Active user count display
- Clean and responsive UI
- Username-based identification

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ewdlop/Private-Chat-Room.git
cd Private-Chat-Room
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

3. Enter a username and start chatting!

## How to Use

- Enter your desired username on the login screen
- Click "Join Chat" or press Enter to join the chat room
- Type your message in the input field at the bottom
- Press Enter or click "Send" to send your message
- See other users join and leave in real-time
- The user count shows how many people are currently in the chat


# MusicXML(one of my team lead told me something dramatic about XML)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <work>
    <work-title>Time for Us & My Heart Will Go On Medley</work-title>
  </work>
  <identification>
    <creator type="composer">Arranged by Raymond</creator>
  </identification>
  <part-list>
    <score-part id="P1">
      <part-name>Lead Piano</part-name>
    </score-part>
    <score-part id="P2">
      <part-name>Strings</part-name>
    </score-part>
    <score-part id="P3">
      <part-name>Flute</part-name>
    </score-part>
    <score-part id="P4">
      <part-name>Vocals</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>-2</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
        <notations>
          <slur type="start"/>
        </notations>
      </note>
      <note>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
        <notations>
          <slur type="stop"/>
        </notations>
      </note>
    </measure>
    <measure number="2">
      <note>
        <pitch>
          <step>F</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
  <part id="P2">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>-2</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>F</sign>
          <line>4</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>A</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <pitch>
          <step>D</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
    <measure number="2">
      <note>
        <pitch>
          <step>G</step>
          <octave>3</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <pitch>
          <step>C</step>
          <octave>4</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
  <part id="P3">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>-2</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <pitch>
          <step>F</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
    <measure number="2">
      <note>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <pitch>
          <step>G</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
  <part id="P4">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>-2</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <lyric>
          <syllabic>single</syllabic>
          <text>Near</text>
        </lyric>
        <pitch>
          <step>C</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <lyric>
          <syllabic>single</syllabic>
          <text>far</text>
        </lyric>
        <pitch>
          <step>E</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
    <measure number="2">
      <note>
        <lyric>
          <syllabic>single</syllabic>
          <text>wherever</text>
        </lyric>
        <pitch>
          <step>D</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
      <note>
        <lyric>
          <syllabic>single</syllabic>
          <text>you</text>
        </lyric>
        <pitch>
          <step>F</step>
          <octave>5</octave>
        </pitch>
        <duration>4</duration>
        <type>whole</type>
      </note>
    </measure>
  </part>
</score-partwise>
```
