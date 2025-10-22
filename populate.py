#!/usr/bin/env python

'''
Author: espimyte
Email: espimyte@gmail.com
Website: espimyte.com
'''

from bs4 import BeautifulSoup
import sys
import json
sys.stdout.reconfigure(encoding='utf-8')

INDEX_PATH = 'index.html'
MEMBERS_PATH = 'data/members.json'

def write_table(members_json):
    soup = ""
    with open(INDEX_PATH, "r", encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), features="html.parser")
        members_table = soup.find(id="members-table")
        members_table.contents.clear()

        for member in reversed(members_json):
            member_entry = soup.new_tag("tr")

            name = member["name"] if 'name' in member else 'N/A'
            url = member["url"] if 'url' in member else ''
            button = '{}'.format(member["button"]) if 'button' in member else '/assets/blank.png'
            desc = member["desc"] if 'desc' in member else ''

            member_cell = soup.new_tag("td")
            member_links = soup.new_tag("div", attrs={"class": "member-links"})

            # Button
            button_link = soup.new_tag("a", target="_blank", href=url)
            button_image = soup.new_tag("img", src=button)
            button_link.append(button_image)
            member_links.append(button_link)

            if "button" not in member:
                button_link['class'] = "empty"

            # Link
            link = soup.new_tag("a", target="_blank", href=url)
            link.append(name)
            member_links.append(link)

            # Desc
            member_desc = soup.new_tag("div", attrs={"class": "member-desc"})
            member_desc.append(desc)

            if "desc" not in member:
                member_desc["class"] = "member-desc empty"

            member_cell.append(member_links)
            member_cell.append(member_desc)

            member_entry.append(member_cell)

            members_table.append(member_entry)
        
        members_count = soup.find(id="members-count")
        members_count.clear()
        members_count.append('{}'.format(len(members_json)))
    
    with open(INDEX_PATH, "w", encoding='utf-8') as f:
        f.write(str(soup))

def load_members_json():
    with open(MEMBERS_PATH) as f:
        d = json.load(f)
        return d

def main():
    members_json = load_members_json()
    write_table(members_json)

main()