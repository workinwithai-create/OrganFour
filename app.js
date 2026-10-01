const CDN = "https://cdn.jsdelivr.net/gh/workinwithai-create/PreEight@main/public/samples";
const FILES = [
  ["kick", `${CDN}/drums/kick.mp3`], ["snare", `${CDN}/drums/snare.mp3`], ["hat", `${CDN}/drums/hihat.mp3`], ["crash", `${CDN}/drums/crash.mp3`],
  ["pC3", `${CDN}/piano/C3.mp3`], ["pC4", `${CDN}/piano/C4.mp3`], ["pA3", `${CDN}/piano/A3.mp3`],
  ["bE1", `${CDN}/bass/E1.mp3`], ["bA1", `${CDN}/bass/A1.mp3`], ["bC2", `${CDN}/bass/C2.mp3`],
  ["gE2", `${CDN}/guitar/E2.mp3`], ["gA2", `${CDN}/guitar/A2.mp3`], ["gE3", `${CDN}/guitar/E3.mp3`],
  ["tC4", `${CDN}/trumpet/C4.mp3`], ["vA3", `${CDN}/violin/A3.mp3`]
];
const BANKS = {
  piano: [["pC3", 48], ["pA3", 57], ["pC4", 60]],
  bass: [["bE1", 28], ["bA1", 33], ["bC2", 36]],
  guitar: [["gE2", 40], ["gA2", 45], ["gE3", 52]]
};
function bar(symbol, piano, bass, guitar, organ, color) {
  return { symbol, piano, bass, guitar, organ, color: !!color };
}
const G = bar("G", [55, 59, 62], 43, 55, 67);
const Em = bar("Em", [52, 55, 59], 40, 52, 64);
const C = bar("C", [48, 52, 55], 36, 48, 60);
const D = bar("D", [50, 54, 57], 38, 50, 62);
const Am = bar("Am", [57, 60, 64], 33, 57, 69);
const F = bar("F", [53, 57, 60], 41, 53, 65);
const Bm = bar("Bm", [47, 50, 54], 35, 47, 59);
const grooves = [
  {
    id: "sunday", name: "Sunday Room", bpm: 88, key: "G major",
    home: [G, Em, C, D], ret: [G, Em, C, G],
    moves: [
      { id: "swell", name: "Gospel swell", figure: "hold + 3+", blurb: "Bars 5-8 hold the triad, then lift a third on 3+. The pad becomes a room.", bars: [bar("G", [55, 59, 62], 43, 55, 67, true), bar("Em", [52, 55, 59], 40, 52, 64, true), bar("C", [48, 52, 55], 36, 48, 72, true), bar("D", [50, 54, 57], 38, 50, 74, true)] },
      { id: "shuffle", name: "Bar shuffle", figure: "8ths", blurb: "Organ eighths on the top note. The loop stops floating and starts walking.", bars: [bar("G", [55, 59, 62], 43, 55, 67, true), bar("C", [48, 52, 55], 36, 48, 60, true), bar("G", [55, 59, 62], 43, 55, 67, true), bar("D", [50, 54, 57], 38, 50, 62, true)] },
      { id: "church", name: "Church walk", figure: "step down", blurb: "Organ walks G-F#-E-D across four bars. The chorus can sit down after that.", bars: [bar("G", [55, 59, 62], 43, 55, 67, true), bar("D/F#", [50, 54, 57], 42, 50, 66, true), bar("Em", [52, 55, 59], 40, 52, 64, true), bar("D", [50, 54, 57], 38, 50, 62, true)] },
      { id: "leslie", name: "Leslie pulse", figure: "offbeats", blurb: "Offbeat organ stabs. Fake rotary by leaving air on the downbeats.", bars: [bar("G", [55, 59, 62], 43, 55, 71, true), bar("Em", [52, 55, 59], 40, 52, 67, true), bar("C", [48, 52, 55], 36, 48, 64, true), bar("D", [50, 54, 57], 38, 50, 69, true)] },
      { id: "amen", name: "Amen hold", figure: "IV-I", blurb: "C then G held fat. One church cadence, then the return can end.", bars: [bar("C", [48, 52, 55], 36, 48, 72, true), bar("C", [48, 52, 55], 36, 48, 67, true), bar("G", [55, 59, 62], 43, 55, 67, true), bar("D", [50, 54, 57], 38, 50, 62, true)] },
      { id: "thin", name: "Thin drawbar", figure: "5ths", blurb: "Organ plays fifths only. Space for the vocal, still a live chair.", bars: [bar("G5", [55, 62], 43, 55, 67, true), bar("Em5", [52, 59], 40, 52, 64, true), bar("C5", [48, 55], 36, 48, 60, true), bar("D5", [50, 57], 38, 50, 62, true)] }
    ]
  },
  {
    id: "alley", name: "Alley Minor", bpm: 98, key: "A minor",
    home: [Am, F, C, bar("G", [55, 59, 62], 43, 55, 67)], ret: [Am, F, bar("E", [52, 56, 59], 40, 52, 64), Am],
    moves: [
      { id: "swell", name: "Gospel swell", figure: "hold + 3+", blurb: "Minor room, then the organ climbs on 3+ so verse two can start.", bars: [bar("Am", [57, 60, 64], 33, 57, 69, true), bar("F", [53, 57, 60], 41, 53, 65, true), bar("C", [48, 52, 55], 36, 48, 72, true), bar("E", [52, 56, 59], 40, 52, 76, true)] },
      { id: "shuffle", name: "Bar shuffle", figure: "8ths", blurb: "Organ eighths over Am-F. The alley loop gets a floor.", bars: [bar("Am", [57, 60, 64], 33, 57, 69, true), bar("F", [53, 57, 60], 41, 53, 65, true), bar("Am", [57, 60, 64], 33, 57, 69, true), bar("E", [52, 56, 59], 40, 52, 64, true)] },
      { id: "church", name: "Church walk", figure: "step down", blurb: "A-G-F-E in the organ. The cadence is the walk, not a riser.", bars: [bar("Am", [57, 60, 64], 33, 57, 69, true), bar("G", [55, 59, 62], 43, 55, 67, true), bar("F", [53, 57, 60], 41, 53, 65, true), bar("E", [52, 56, 59], 40, 52, 64, true)] },
      { id: "leslie", name: "Leslie pulse", figure: "offbeats", blurb: "Offbeat organ in the minor key. Leave the downbeat for the kick.", bars: [bar("Am", [57, 60, 64], 33, 57, 76, true), bar("F", [53, 57, 60], 41, 53, 72, true), bar("C", [48, 52, 55], 36, 48, 67, true), bar("E", [52, 56, 59], 40, 52, 71, true)] },
      { id: "amen", name: "Amen hold", figure: "IV-i", blurb: "F then Am held. Soft church door for a sad chorus.", bars: [bar("F", [53, 57, 60], 41, 53, 65, true), bar("F", [53, 57, 60], 41, 53, 72, true), bar("Am", [57, 60, 64], 33, 57, 69, true), bar("E", [52, 56, 59], 40, 52, 64, true)] },
      { id: "thin", name: "Thin drawbar", figure: "5ths", blurb: "Open fifths. Room for the vocal and still a live chair.", bars: [bar("Am5", [57, 64], 33, 57, 69, true), bar("F5", [53, 60], 41, 53, 65, true), bar("C5", [48, 55], 36, 48, 60, true), bar("E5", [52, 59], 40, 52, 64, true)] }
    ]
  },
  {
    id: "porch", name: "Gold Porch", bpm: 82, key: "D major",
    home: [D, Bm, bar("G", [55, 59, 62], 43, 55, 67), bar("A", [57, 61, 64], 33, 57, 69)], ret: [D, Bm, bar("G", [55, 59, 62], 43, 55, 67), D],
    moves: [
      { id: "swell", name: "Gospel swell", figure: "hold + 3+", blurb: "Porch tempo. Organ holds, then lifts so the last chorus can land.", bars: [bar("D", [50, 54, 57], 38, 50, 62, true), bar("Bm", [47, 50, 54], 35, 47, 59, true), bar("G", [55, 59, 62], 43, 55, 74, true), bar("A", [57, 61, 64], 33, 57, 76, true)] },
      { id: "shuffle", name: "Bar shuffle", figure: "8ths", blurb: "Slow eighths. The porch loop finally has a human right hand.", bars: [bar("D", [50, 54, 57], 38, 50, 62, true), bar("G", [55, 59, 62], 43, 55, 67, true), bar("D", [50, 54, 57], 38, 50, 62, true), bar("A", [57, 61, 64], 33, 57, 69, true)] },
      { id: "church", name: "Church walk", figure: "step down", blurb: "D-C#-B-A in the organ. Walk home instead of looping the four.", bars: [bar("D", [50, 54, 57], 38, 50, 62, true), bar("A/C#", [49, 57, 61], 37, 49, 61, true), bar("Bm", [47, 50, 54], 35, 47, 59, true), bar("A", [57, 61, 64], 33, 57, 69, true)] },
      { id: "leslie", name: "Leslie pulse", figure: "offbeats", blurb: "Offbeats at porch tempo. Rotary without a plugin.", bars: [bar("D", [50, 54, 57], 38, 50, 74, true), bar("Bm", [47, 50, 54], 35, 47, 71, true), bar("G", [55, 59, 62], 43, 55, 67, true), bar("A", [57, 61, 64], 33, 57, 76, true)] },
      { id: "amen", name: "Amen hold", figure: "IV-I", blurb: "G then D held fat. The porch can actually end.", bars: [bar("G", [55, 59, 62], 43, 55, 67, true), bar("G", [55, 59, 62], 43, 55, 74, true), bar("D", [50, 54, 57], 38, 50, 62, true), bar("A", [57, 61, 64], 33, 57, 69, true)] },
      { id: "thin", name: "Thin drawbar", figure: "5ths", blurb: "Fifths only. Leave the third for the singer.", bars: [bar("D5", [50, 57], 38, 50, 62, true), bar("Bm5", [47, 54], 35, 47, 59, true), bar("G5", [55, 62], 43, 55, 67, true), bar("A5", [57, 64], 33, 57, 69, true)] }
    ]
  }
];
const state = { groove: grooves[0], move: grooves[0].moves[0], playing: false, active: -1 };
let ctx, bus, buffers = {}, timer = null, token = 0;
function currentMove() { return state.groove.moves.find((m) => m.id === state.move.id) || state.groove.moves[0]; }
function retOf() { const m = currentMove(); return m.ret || state.groove.ret; }
function form() { return [...state.groove.home, ...currentMove().bars, ...retOf()]; }
function nearest(bank, midi) {
  return bank.reduce((best, row) => Math.abs(row[1] - midi) < Math.abs(best[1] - midi) ? row : best);
}
async function seat() {
  if (ctx) return;
  ctx = new AudioContext();
  bus = ctx.createGain();
  bus.gain.value = 0.85;
  bus.connect(ctx.destination);
  let n = 0;
  for (const [key, url] of FILES) {
    n += 1;
    document.getElementById("status").textContent = `Seating live chairs ${n}/${FILES.length}`;
    try {
      const res = await fetch(url);
      buffers[key] = await ctx.decodeAudioData(await res.arrayBuffer());
    } catch (err) { console.warn(key, err); }
  }
  document.getElementById("status").textContent = "Chairs seated \u00b7 live FluidR3 piano as organ, nylon, upright, kit, trumpet, violin";
}
function tone(name, when, rate, gain, dur) {
  const buffer = buffers[name];
  if (!buffer || !ctx) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  src.playbackRate.value = rate;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0008, gain), when + 0.018);
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  src.connect(g); g.connect(bus);
  src.start(when); src.stop(when + dur + 0.02);
}
function note(bank, midi, when, gain, dur) {
  if (bank === "trumpet") return tone("tC4", when, 2 ** ((midi - 60) / 12), gain, dur);
  if (bank === "violin") return tone("vA3", when, 2 ** ((midi - 57) / 12), gain, dur);
  const row = nearest(BANKS[bank], midi);
  tone(row[0], when, 2 ** ((midi - row[1]) / 12), gain, dur);
}
function organ(midi, when, gain, dur) {
  note("piano", midi, when, gain, dur);
  note("violin", midi, when, gain * 0.35, dur + 0.25);
}
function schedule(chord, t0, step, last, organOn) {
  const fig = currentMove().figure;
  for (let s = 0; s < 16; s++) {
    const when = t0 + s * step;
    if (s % 2 === 0) tone("hat", when, 1, 0.055, 0.08);
    if (s === 0 || s === 10) tone("kick", when, 1, s === 0 ? 0.68 : 0.38, 0.26);
    if (s === 4 || s === 12) tone("snare", when, 1, 0.36, 0.2);
    if (s === 0) {
      chord.piano.forEach((midi, i) => note("piano", midi, when, 0.1 * (i === 1 ? 0.8 : 1), 1.05));
      note("bass", chord.bass, when, 0.48, 0.46);
      if (organOn && chord.organ != null) {
        organ(chord.organ, when, fig === "8ths" ? 0.16 : 0.28, fig === "hold + 3+" || fig === "IV-I" || fig === "IV-i" ? 1.55 : 0.9);
        chord.piano.forEach((midi) => organ(midi, when, 0.08, 1.4));
      }
      if (last) tone("crash", when, 1, 0.22, 1.2);
    }
    if (s === 8) {
      note("bass", chord.bass + 7, when, 0.26, 0.3);
      note("guitar", chord.guitar, when, 0.1, 0.32);
    }
    if (organOn && chord.organ != null) {
      if (fig === "8ths" && s % 2 === 0) organ(chord.organ, when, 0.16, 0.18);
      if (fig === "offbeats" && s % 4 === 2) organ(chord.organ, when, 0.26, 0.28);
      if ((fig === "hold + 3+" || fig === "step down") && s === 10) organ(chord.organ + 4, when, 0.22, 0.5);
      if ((fig === "IV-I" || fig === "IV-i") && s === 8) organ(chord.organ, when, 0.2, 0.7);
      if (fig === "5ths" && (s === 0 || s === 8)) organ(chord.organ, when, 0.22, 0.7);
    }
  }
}
function stop() {
  token += 1;
  state.playing = false;
  state.active = -1;
  if (timer) clearTimeout(timer);
  timer = null;
  paint();
}
async function play(mode, only) {
  await seat();
  if (ctx.state === "suspended") await ctx.resume();
  stop();
  const mine = token;
  state.playing = true;
  const step = 60 / state.groove.bpm / 4;
  const move = currentMove();
  const bars = mode === "home" ? state.groove.home : mode === "move" ? [...move.bars, ...retOf()] : mode === "bar" ? [form()[only]] : form();
  const origin = mode === "move" ? 4 : mode === "bar" ? only : 0;
  let index = 0;
  const tick = () => {
    if (token !== mine) return;
    if (index >= bars.length) {
      if (mode === "home") index = 0;
      else { stop(); return; }
    }
    const absolute = mode === "home" ? index % 4 : origin + index;
    state.active = absolute;
    paint();
    const organOn = mode === "home" ? false : mode === "bar" ? absolute >= 4 && absolute < 8 : absolute >= 4;
    schedule(bars[index], ctx.currentTime + 0.04, step, (mode === "full" || mode === "move") && absolute === 11, organOn);
    index += 1;
    timer = setTimeout(tick, step * 16 * 1000);
  };
  tick();
}
function punch() {
  const g = state.groove, m = currentMove(), bars = form();
  const lines = (a, b) => bars.slice(a, b).map((c, i) => `  ${a + i + 1}. ${c.symbol}${c.color ? "  \u2190 organ" : ""}`).join("\n");
  return `OrganFour punch list
${g.name} \u00b7 ${g.bpm} BPM \u00b7 ${g.key} \u00b7 ${m.name}
Figure: ${m.figure}

The problem: the loop has a pad, not a room.
The move: ${m.blurb}

Dry pocket (bars 1-4)
${lines(0, 4)}

Organ (bars 5-8) \u2014 ${m.name}
${lines(4, 8)}

Return (bars 9-12) \u2014 organ stays seated, tonic lands
${lines(8, 12)}

Live chairs only. Drop the MIDI on a new track.
Distinct from BorrowFour, StrumFour, HarmFour, PedalFour, BreathFour.`;
}
function vlq(n) {
  const bytes = [n & 0x7f];
  let rest = n >> 7;
  while (rest > 0) { bytes.unshift((rest & 0x7f) | 0x80); rest >>= 7; }
  return bytes;
}
function midiBytes() {
  const events = [];
  const us = Math.round(60000000 / state.groove.bpm);
  events.push({ tick: 0, order: 0, data: [0xff, 0x51, 0x03, (us >> 16) & 255, (us >> 8) & 255, us & 255] });
  form().forEach((chord, i) => {
    const t = i * 1920;
    chord.piano.forEach((midi) => {
      events.push({ tick: t, order: 2, data: [0x90, midi, 70] });
      events.push({ tick: t + 1440, order: 1, data: [0x80, midi, 0] });
    });
    events.push({ tick: t, order: 2, data: [0x91, chord.bass, 90] });
    events.push({ tick: t + 960, order: 1, data: [0x81, chord.bass, 0] });
    if (i >= 4 && chord.organ != null) {
      events.push({ tick: t, order: 2, data: [0x93, chord.organ, 104] });
      events.push({ tick: t + 1680, order: 1, data: [0x83, chord.organ, 0] });
    }
  });
  events.sort((a, b) => a.tick - b.tick || a.order - b.order);
  const out = [];
  let last = 0;
  for (const e of events) { out.push(...vlq(e.tick - last), ...e.data); last = e.tick; }
  out.push(0x00, 0xff, 0x2f, 0x00);
  const head = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0x01, 0xe0];
  const tr = [0x4d, 0x54, 0x72, 0x6b, (out.length >> 24) & 255, (out.length >> 16) & 255, (out.length >> 8) & 255, out.length & 255, ...out];
  return new Uint8Array([...head, ...tr]);
}
function paint() {
  const g = state.groove, m = currentMove();
  document.getElementById("grooves").innerHTML = `<p class="quiet">Pocket</p>` + grooves.map((row) =>
    `<button class="choice${row.id === g.id ? " on" : ""}" data-g="${row.id}"><b>${row.name}</b><span>${row.bpm} BPM \u00b7 ${row.key}</span></button>`
  ).join("");
  document.getElementById("moves").innerHTML = `<p class="quiet">Organ figure \u00b7 ${m.figure}</p>` + g.moves.map((row) =>
    `<button class="choice${row.id === m.id ? " on" : ""}" data-m="${row.id}"><b>${row.name}</b><span>${row.blurb}</span></button>`
  ).join("");
  const lanes = [["Dry", g.home, 0], ["Organ", m.bars, 4], ["Return", retOf(), 8]];
  document.getElementById("bars").innerHTML = lanes.map(([name, bars, offset]) =>
    `<div class="lane"><div class="lane-name">${name}</div><div class="bars">${bars.map((c, i) => {
      const index = offset + i;
      return `<button class="bar${c.color ? " color" : ""}${state.active === index ? " hot" : ""}" data-bar="${index}"><div class="n">${index + 1}</div><div class="c">${c.symbol}</div></button>`;
    }).join("")}</div></div>`
  ).join("") + `<p class="quiet">Dry is the stuck loop. Organ bars are the new chair. Keys: A dry, B full twelve, 8 organ plus return, space stops.</p>`;
  document.getElementById("punch").textContent = punch();
  document.querySelectorAll("[data-g]").forEach((el) => el.onclick = () => {
    stop();
    state.groove = grooves.find((row) => row.id === el.dataset.g);
    state.move = state.groove.moves.find((row) => row.id === state.move.id) || state.groove.moves[0];
    paint();
  });
  document.querySelectorAll("[data-m]").forEach((el) => el.onclick = () => {
    stop();
    state.move = state.groove.moves.find((row) => row.id === el.dataset.m);
    paint();
  });
  document.querySelectorAll("[data-bar]").forEach((el) => el.onclick = () => play("bar", Number(el.dataset.bar)));
}
document.getElementById("playA").onclick = () => play("home");
document.getElementById("playB").onclick = () => play("full");
document.getElementById("play8").onclick = () => play("move");
document.getElementById("stop").onclick = stop;
document.getElementById("copy").onclick = () => navigator.clipboard.writeText(punch()).then(() => {
  document.getElementById("status").textContent = "Punch list copied.";
});
document.getElementById("midi").onclick = () => {
  const bytes = midiBytes();
  const url = URL.createObjectURL(new Blob([bytes], { type: "audio/midi" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `OrganFour-${state.groove.id}-${currentMove().id}.mid`;
  a.click();
  URL.revokeObjectURL(url);
};
window.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") play("home");
  if (event.key === "b" || event.key === "B") play("full");
  if (event.key === "8") play("move");
  if (event.key === " ") { event.preventDefault(); stop(); }
});
paint();
