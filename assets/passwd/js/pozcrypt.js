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