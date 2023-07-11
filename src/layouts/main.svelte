<script>
  import argon2 from 'argon2-browser/dist/argon2-bundled.min.js'
  import Open from '../svg/preview-open.svelte'
  import Close from '../svg/preview-close.svelte'
  const SALT = 'Unified_Password'
  const hashLen = 12
  const _desensitize = '*'.repeat(hashLen * 2)
  let isShow = false
  let isCopy = false
  let pwd = ''
  let alias = ''
  let hash = _desensitize
  let desensitize = _desensitize

  function desensitizeString(str) {
    const regex = /(.{3})(.*)(.{3})/
    const replacement = (_, firstThree, middle, lastThree) => {
      const stars = '*'.repeat(middle.length)
      return `${firstThree}${stars}${lastThree}`
    }
    return str.replace(regex, replacement)
  }

  async function onInput() {
    if (!pwd || !alias) {
      hash = _desensitize
      desensitize = _desensitize
      return
    }

    try {
      const options = {
        pass: pwd,
        salt: `${alias}_${SALT}`,
        hashLen,
        type: argon2.ArgonType.Argon2id
      }

      const { hashHex } = await argon2.hash(options)
      hash = hashHex
      desensitize = desensitizeString(hash)
    } catch (error) {
      console.error(error)
    }
  }

  function copyPolyfill(content) {
    const textarea = document.createElement('textarea')
    textarea.value = content
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  async function onCopy() {
    if (typeof navigator?.clipboard?.writeText === 'function') {
      await navigator.clipboard.writeText(hash)
    } else {
      copyPolyfill(hash)
    }

    isCopy = !isCopy
    setTimeout(() => {
      isCopy = !isCopy
    }, 2000)
  }
</script>

<main>
  <h1>Unified Password</h1>
  <div class="container-item password-wrap">
    <input
      required
      type="password"
      name="password"
      id="password"
      bind:value={pwd}
      on:input={onInput}
    />
    <span class="bar" />
    <label for="password">Your Password</label>
  </div>
  <div class="container-item alias-wrap">
    <input
      required
      type="password"
      name="alias"
      id="alias"
      bind:value={alias}
      on:input={onInput}
    />
    <span class="bar" />
    <label for="alias">Platform Alias</label>
  </div>
  <div class="container-item new-password">
    <span class="password">{isShow ? hash : desensitize}</span>
    <button
      class="show-password"
      style={`visibility: ${pwd && alias ? 'visible' : 'hidden'}`}
      on:click={() => (isShow = !isShow)}
    >
      {#if isShow}
        <Close />
      {:else}
        <Open />
      {/if}
    </button>
  </div>

  <button class="copy" on:click={onCopy} disabled={!(pwd && alias)}
    >{isCopy ? 'COPIED' : 'COPY'}</button
  >
</main>

<style>
  main {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
  }

  h1 {
    color: var(--color, #393e46);
  }

  input {
    color: var(--color);
    width: 100%;
    outline: none;
    font-size: 18px;
    border: none;
    padding-bottom: 4px;
    border-bottom: 2px solid #bfbfbf;
    background: transparent;
    transition: 0.2s ease;
  }

  .container-item {
    position: relative;
    width: 100%;
    margin-top: 40px;
  }

  .container-item .bar {
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2.5px;
    top: 25px;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom center;
    transition: 0.4s ease;
  }

  .container-item input:focus ~ .bar {
    transform: scaleX(1);
  }

  .container-item label {
    position: absolute;
    width: 100%;
    bottom: 4px;
    left: 0;
    transition: 0.4s ease;
  }

  .container-item input:valid ~ label,
  .container-item input:focus ~ label {
    transform: translateY(-24px);
    font-size: 14px;
    opacity: 0.4;
  }

  .new-password {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
  }

  .new-password .password {
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
  }

  .show-password {
    color: var(--color);
    display: flex;
    border: none;
    cursor: pointer;
    padding: 0 6px;
    background: transparent;
    opacity: 0.1;
    outline: none;
  }
  .show-password:hover {
    opacity: 1;
  }

  .copy {
    font-size: 20px;
    width: 100%;
    color: #fff;
    border-color: #f0db4f;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    outline: none;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    padding: 6px 0;
    border: 1px solid #dcdfe6;
    background: #f0db4f;
    transition: 0.1s;
    border-radius: 4px;
    white-space: nowrap;
    user-select: none;
  }
  .copy:hover {
    opacity: 1;
  }
</style>
