CodeMirror.defineSimpleMode("simplemode", {
    // The start state contains the rules that are intially used
    start: [
      {regex: /\b(?:assume|show|so|conclude)\b/i, token: "keyword"},
      {regex: /\b(?:in|line|defn|forall|exists)\b/i, token: "atom"},
      {regex: /(?:1|2|3|4|5|6|7|8|9)/i, token: "string"},
      {regex: /\b(?:R_Sigma)\b/i, token: "builtin"}
      //{regex: /()/, token: ""}
    ],
    // The multi-line comment state.
    comment: [
      {regex: /.*?\*\//, token: "comment", next: "start"},
      {regex: /.*/, token: "comment"}
    ],
    // The meta property contains global information about the mode. It
    // can contain properties like lineComment, which are supported by
    // all modes, and also directives like dontIndentStates, which are
    // specific to simple modes.
    meta: {
      dontIndentStates: ["comment"],
      lineComment: "//"
    }
  });
  