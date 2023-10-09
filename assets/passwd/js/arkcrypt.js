// variables to be filled when generating the file
    var encryptedMsg = '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',
        salt = 'f80e0c746246423c9e263a12db633b39',
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