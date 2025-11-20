export function objectToSearchParams(
  targetObject: Record<string, string | number | undefined>,
): URLSearchParams {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(targetObject)) {
    if (!key || !value) continue;
    params.append(key, String(value));
  }

  return params;
}
