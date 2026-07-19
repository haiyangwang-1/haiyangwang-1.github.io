const statementKinds = new Set([
  'theorem',
  'lemma',
  'definition',
  'proposition',
  'corollary',
  'remark',
]);

function textContent(node) {
  if (typeof node?.value === 'string') return node.value;
  if (!Array.isArray(node?.children)) return '';
  return node.children.map(textContent).join('');
}

function statementKind(node) {
  if (node?.type !== 'blockquote') return null;

  const firstParagraph = node.children?.[0];
  const firstInline = firstParagraph?.children?.[0];
  if (firstParagraph?.type !== 'paragraph' || firstInline?.type !== 'strong') {
    return null;
  }

  const firstWord = textContent(firstInline).trim().split(/[\s(:.]/, 1)[0].toLowerCase();
  return statementKinds.has(firstWord) ? firstWord : null;
}

function visit(node) {
  const kind = statementKind(node);
  if (kind) {
    node.data ??= {};
    node.data.hName = 'aside';
    node.data.hProperties = {
      ...(node.data.hProperties ?? {}),
      className: ['math-statement', `${kind}-block`],
      'data-statement-kind': kind,
    };
  }

  if (Array.isArray(node?.children)) {
    node.children.forEach(visit);
  }
}

export default function remarkMathStatements() {
  return visit;
}
