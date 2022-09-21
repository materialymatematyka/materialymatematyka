// variables to be filled when generating the file
    var encryptedMsg = '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',
        salt = '3a12bd0ba37ed9d0cf3308619c6fe0f4',
        isRememberEnabled = true,
        rememberDurationInDays = 30; // 0 means forever

    // constants
    var rememberPassphraseKey = 'staticrypt_passphrase',
        rememberExpirationKey = 'staticrypt_expiration';

    /**
     * Decrypt a salted msg using a password.
     * Inspired by https://github.com/adonespitogo
     *
     * @param  encryptedMsg
     * @param  hashedPassphrase
     * @returns 
     */
    function decryptMsg(encryptedMsg, hashedPassphrase) {
        var iv = CryptoJS.enc.Hex.parse(encryptedMsg.substr(0, 32))
        var encrypted = encryptedMsg.substring(32);

        return CryptoJS.AES.decrypt(encrypted, hashedPassphrase, {
            iv: iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        }).toString(CryptoJS.enc.Utf8);
    }

    /**
     * Decrypt our encrypted page, replace the whole HTML.
     *
     * @param  hashedPassphrase
     * @returns 
     */
    function decryptAndReplaceHtml(hashedPassphrase) {
        var encryptedHMAC = encryptedMsg.substring(0, 64),
            encryptedHTML = encryptedMsg.substring(64),
            decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(hashedPassphrase).toString()).toString();

        if (decryptedHMAC !== encryptedHMAC) {
            return false;
        }

        var plainHTML = decryptMsg(encryptedHTML, hashedPassphrase);

        document.write(plainHTML);
        document.close();

        return true;
    }

    /**
     * Salt and hash the passphrase so it can be stored in localStorage without opening a password reuse vulnerability.
     *
     * @param  passphrase
     * @returns 
     */
    function hashPassphrase(passphrase) {
        return CryptoJS.PBKDF2(passphrase, salt, {
            keySize: 256 / 32,
            iterations: 1000
        }).toString();
    }

    /**
     * Clear localstorage from staticrypt related values
     */
    function clearLocalStorage() {
        localStorage.removeItem(rememberPassphraseKey);
        localStorage.removeItem(rememberExpirationKey);
    }

    // try to automatically decrypt on load if there is a saved password
    window.onload = function () {
        if (isRememberEnabled) {
            // show the remember me checkbox
            document.getElementById('staticrypt-remember-label').classList.remove('hidden');

            // if we are login out, clear the storage and terminate
            var queryParams = new URLSearchParams(window.location.search);

            if (queryParams.has("staticrypt_logout")) {
                return clearLocalStorage();
            }

            // if there is expiration configured, check if we're not beyond the expiration
            if (rememberDurationInDays && rememberDurationInDays > 0) {
                var expiration = localStorage.getItem(rememberExpirationKey),
                    isExpired = expiration && new Date().getTime() > parseInt(expiration);

                if (isExpired) {
                    return clearLocalStorage();
                }
            }

            var hashedPassphrase = localStorage.getItem(rememberPassphraseKey);

            if (hashedPassphrase) {
                // try to decrypt
                var isDecryptionSuccessful = decryptAndReplaceHtml(hashedPassphrase);

                // if the decryption is unsuccessful the password might be wrong - silently clear the saved data and let
                // the user fill the password form again
                if (!isDecryptionSuccessful) {
                    return clearLocalStorage();
                }
            }
        }
    }

    // handle password form submission
    document.getElementById('staticrypt-form').addEventListener('submit', function (e) {
        e.preventDefault();

        var passphrase = document.getElementById('staticrypt-password').value,
            shouldRememberPassphrase = document.getElementById('staticrypt-remember').checked;

        // decrypt and replace the whole page
        var hashedPassphrase = hashPassphrase(passphrase);
        var isDecryptionSuccessful = decryptAndReplaceHtml(hashedPassphrase);

        if (isDecryptionSuccessful) {
            // remember the hashedPassphrase and set its expiration if necessary
            if (isRememberEnabled && shouldRememberPassphrase) {
                window.localStorage.setItem(rememberPassphraseKey, hashedPassphrase);

                // set the expiration if the duration isn't 0 (meaning no expiration)
                if (rememberDurationInDays > 0) {
                    window.localStorage.setItem(
                        rememberExpirationKey,
                        (new Date().getTime() + rememberDurationInDays * 24 * 60 * 60 * 1000).toString()
                    );
                }
            }
        } else {
            alert('Hasło niepoprawne!');
        }
    });